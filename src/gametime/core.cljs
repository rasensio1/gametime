(ns ^:figwheel-always gametime.core
  (:require [reagent.core :as r :refer [atom]]
            [goog.events :as events]))

(enable-console-print!)

(def rows 50)
(def cols 50)
(def board-pix 500)
(def px-inc (/ board-pix rows))

(defn move [[dx dy] [x y]]  [(+ dx x) (+ dy y)])

(def movement { :left  (partial move [(* px-inc -1) 0])
                :right (partial move [px-inc 0])
                :up    (partial move [0 px-inc])
                :down  (partial move [0 (* px-inc -1)])
               })


(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(defonce context (.getContext (.getElementById js/document "target") "2d" ))
(defn drawSquare [[x y]] (.fillRect context x y 10 10))
(defn drawFood [[x y]] (drawSquare [x y] ))
(defn clearSquare [] (.clearRect context 0 0 500 500))

(defn render-canvas [state]
  (clearSquare)
  (drawSquare (get @state :pos))
)

(defn rand-food [] [(rand-int cols) (rand-int rows)])

(def initial-state (atom {:pos [0 0] :dir :right :food rand-food}))
(defonce app-state initial-state)

(defn new-pos [state]
  (let [dir  (:dir state)
        pos  (:pos state)
        move (get movement dir)]
    (move pos)))

(defn update-state [app-state] 
  (assoc app-state :pos (new-pos app-state))
)

(defn inside? [app-state]
  (let [pos (get @app-state :pos)]
    (and (every? #(>= %1 0) pos) 
         (every? #(<= %1 400) pos) 
        )))

(defn tick [app-state]
    (render-canvas app-state)
      (if (inside? app-state)
          (do (swap! app-state update-state)
              (js/setTimeout (fn [] (tick app-state)) 50)))) 

#_(tick app-state)

(def key-map {37 :left 38 :down 39 :right 40 :up})

(events/listen js/document "keydown" (fn [e] (swap! app-state assoc :dir (key-map (.-keyCode e)))))

(defn on-js-reload []
  (println "reloaded")
)

