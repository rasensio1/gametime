(ns ^:figwheel-always gametime.core
  (:require [reagent.core :as r :refer [atom]]
            [goog.events :as events]))

(enable-console-print!)

(def rows 20)
(def cols 20)

(defn move [[dx dy] [x y]]  [(+ dx x) (+ dy y)])

(def movement { :left  (partial move [-1 0])
                :right (partial move [1 0])
                :up    (partial move [0 1])
                :down  (partial move [0 -1])
               })


(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))


(defonce context (.getContext (.getElementById js/document "target") "2d" ))
(defn drawSquare [x y] (.fillRect context x y 100 100))
(defn clearSquare [] (.clearRect context 0 0 500 500))

(defn render-canvas [[x y]]
  (clearSquare)
  (drawSquare x y)
)

(def initial-state (atom {:pos [0 0] :dir :right}))
(defonce app-state initial-state)

(defn change-dir [sym] (println sym))

(defn new-pos [state]
  (let [dir  (:dir state)
        pos  (:pos state)
        move (get movement dir)]
    (move pos)))

(defn update-state [app-state] 
  (assoc app-state :pos (new-pos app-state))
)

#_(defn tick [app-state]
    (render-canvas (:pos @app-state))
      (if (<= (first (:pos @app-state)) 400)
          (do (swap! app-state (update-state app-state))
              (js/setTimeout (fn [] (tick app-state)) 5)))) 


(def key-map {37 :left 38 :up 39 :right 40 :down})

(events/listen js/document "keydown" (fn [e] (change-dir (.-keyCode e))))

(defn on-js-reload []
  (println "reloaded")
)

