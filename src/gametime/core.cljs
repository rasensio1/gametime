(ns ^:figwheel-always gametime.core
  (:require [reagent.core :as reagent :refer [atom]]))

(enable-console-print!)

(defonce app-state (atom {:text "Hello world!"}))

(defn hello-world []
  [:h1 (:text @app-state)])

(reagent/render-component [hello-world]
                         (. js/document (getElementById "app")))

(def rows 20)
(def cols 20)

(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))

(defn go-left [[x y]] [(dec x) y])
(defn go-right [[x y]] [(inc x) y])
(defn go-up [[x y]] [x (inc y)])
(defn go-down [[x y]] [x (dec y)])

(def initial-state {:board empty-board
                    :position [9 0]
                    :direction go-right})

(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
