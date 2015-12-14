(ns ^:figwheel-always gametime.core
  (:require [reagent.core :as r :refer [atom]]
            [goog.events :as events]
            [dommy.core :refer-macros [sel sel1]]))

(enable-console-print!)

(def rows 50)
(def cols 50)
(def sq 10)
(defonce context 
  (.getContext 
    (.getElementById js/document "target") "2d" ))
(def board-pix (js/parseInt (aget context "canvas" "width")))
(def px-inc (/ board-pix rows))

(defn drawSquare [[x y]] (.fillRect context x y sq sq))
(defn draw-food [[x y]] (.fillRect context x y sq sq))
(defn clearSquare [] (.clearRect context 0 0 board-pix board-pix))
(defn draw-tail [coll] (doseq [tuple coll] (drawSquare tuple)))

(defn move [[dx dy] [x y]]  [(+ dx x) (+ dy y)])

(def movement { :left  (partial move [(* px-inc -1) 0])
                :right (partial move [px-inc 0])
                :up    (partial move [0 px-inc])
                :down  (partial move [0 (* px-inc -1)])
               })

(defn my-tail [state] (vec (take (get @state :points) 
                            (reverse (get @state :history)))))

(defn render-canvas [state]
  (do (clearSquare)
      (drawSquare (get @state :pos))
      (draw-food (get-in @state [:food :pos]))
      (draw-tail (my-tail state))))

(defn food-int [] (* px-inc (rand-nth (range 1 cols))))

(defn rand-food [] [(food-int) (food-int)])

(def initial-state {:pos [0 0] 
                    :dir :right 
                    :speed 50
                    :food {:pos (rand-food) 
                           :speed :normal} 
                    :points 0
                    :history []
                    :mode :crazy})

(defonce app-state (atom initial-state))

(defn new-pos [state]
  (let [dir  (:dir state)
        pos  (:pos state)
        move (get movement dir)]
    (move pos)))

(defn update-pos [app-state] 
  (assoc app-state :pos (new-pos app-state)))

(defn inside? [app-state]
  (let [pos (get @app-state :pos)]
    (and (every? #(>= %1 0) pos) 
         (every? #(< %1 board-pix) pos) 
        )))

(defn not-over-tail? [app-state] 
  (let [pos (get @app-state :pos)]
    (not-any? #(= pos %) (my-tail app-state))))

(defn no-collision? [app-state]
  (and (inside? app-state) (not-over-tail? app-state) 
  ))

(defn update-speed [mult my-speed]
  (* mult my-speed))

(def speed-map
  { :fast (partial update-speed 0.75)
    :normal (partial update-speed 1)
    :slow (partial update-speed 1.5)
  })

(defn new-speed [my-speed]
  ((get speed-map (get-in @app-state [:food :speed])) my-speed)
  )

(defn rand-speed [] (let [mode (get @app-state :mode)] 
                      (cond 
                        (= mode :normal) :normal
                        (= mode :crazy) (rand-nth (keys speed-map))
                        )))

(defn update-on-food [] (if (= (get @app-state :pos) 
                               (get-in @app-state [:food :pos]))
                                  (let [food-speed ()]
                                  (do (swap! app-state update-in [:points] inc) 
                                      (swap! app-state assoc-in [:food :pos] (rand-food))
                                      (swap! app-state assoc :speed (new-speed (get @app-state :speed)))
                                      (swap! app-state assoc-in [:food :speed] (rand-speed))
                                      ))))

(defn new-history [app-state] 
  (conj (get @app-state :history) 
        (get @app-state :pos)))

(defn pos-history [app-state] 
  (swap! app-state assoc 
         :history (new-history app-state)))

(def key-map {37 :left 38 :down 39 :right 40 :up})
(events/listen js/document "keydown" 
               (fn [e] (swap! app-state assoc 
                              :dir (key-map (.-keyCode e)))))
(defn points-holder []
        [:p 
         "Score: " (get @app-state :points) ])

(defn render-points []
    (r/render-component [points-holder]
                        (js/document.getElementById "points")))

(defn restart-button [] 
      (-> (sel1 :#start-button)
          (dommy.core/remove-class! :hidden)))

(defn reset-app-state [] (reset! app-state initial-state))

(defn game-over-text []
  [:div.game-over 
   [:p "Game Over! Your score: " (get @app-state :points)]])

(defn render-over []
    (r/render-component [game-over-text]
                        (js/document.getElementById "game-over")))

(defn game-over [] (do (restart-button)
                       (render-over)
                       (-> (sel1 :#game-over)
                           (dommy.core/remove-class! :hidden))
                       ))

(defn tick [app-state]
    (pos-history app-state)
    (swap! app-state update-pos)
    (render-canvas app-state)
                                      (println (get-in @app-state [:food :speed]))
    (update-on-food)
    (if (no-collision? app-state)
            (js/setTimeout (fn [] (tick app-state)) (get @app-state :speed))
            (game-over)))

(defn reset-game []
  (do (reset-app-state)
      (tick app-state)
      (-> (sel1 :#start-button)
          (dommy.core/add-class! :hidden))
      (-> (sel1 :#game-over)
                (dommy.core/add-class! :hidden))
      ))

(defn start-button []
  [:div.the-button
      [:input {:type "button" 
               :value "Start"
               :on-click #(reset-game)}]])

(defn render-start [component id]
    (r/render-component [component]
                        (js/document.getElementById id)))
(render-points)
(render-start start-button "start-button")



(defn on-js-reload []
  (println "reloaded"))

