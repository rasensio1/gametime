(ns ^:figwheel-always gametime.core
  (:require [reagent.core :as r :refer [atom]]
            [goog.events :as events]))

(enable-console-print!)

(def rows 20)
(def cols 20)

(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(def key-map {37 :left 38 :up 39 :right 40 :down})
(defn move [x] (println x))

(events/listen js/document "keydown" (fn [e] (move (.-keyCode e))))

(defn go-left [[x y]] [(dec x) y])
(defn go-right [[x y]] [(inc x) y])
(defn go-down [[x y]] [x (dec y)])
(defn go-up [[x y]] [x (inc y)])

(defonce context (.getContext (.getElementById js/document "target") "2d" ))
(defn drawSquare [x y] (.fillRect context x y 100 100))
(defn clearSquare [] (.clearRect context 0 0 500 500))

(defn render-canvas [[x y]]
  (clearSquare)
  (drawSquare x y)
)

(def initial-state {:pos [0 0] :dir go-right})
(defonce app-state initial-state)

(defn get-pos [state] (:pos state))

(defn update-pos [app-state] 
        (conj app-state {:pos ((:dir app-state) (:pos app-state))}))

(defn tick [app-state]
    (render-canvas (:pos app-state))
      (if (<= (first (:pos app-state)) 400)
          (do (update-pos app-state)
              (js/setTimeout (fn [] (tick (update-pos app-state))) 5)))) 

(tick app-state)

(defn on-js-reload []
  (println "reloaded")
)

