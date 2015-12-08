(ns ^:figwheel-always gametime.core
  (:require [reagent.core :as r :refer [atom]]))

(enable-console-print!)

(defonce app-state (atom {:text "Hello world!"}))

(def rows 20)
(def cols 20)

(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(defn go-left [[x y]] [(dec x) y])
(defn go-right [[x y]] [(inc x) y])
(defn go-down [[x y]] [x (dec y)])
(defn go-up [[x y]] [x (inc y)])

(defonce context (.getContext (.getElementById js/document "target") "2d" ))


(defn drawSquare [x y w h] (.fillRect context x y w h))
(defn clearSquare [] (.clearRect context 0 0 500 500))

(clearSquare)
(drawSquare 0 0 100 100)


(defn on-js-reload []
  (println "reloaded")
)

