(ns gametime.core
  (:require ))

(enable-console-print!)

(defonce app-state (atom {:text "Hello world!"}))

(def rows 20)
(def cols 20)

(def empty-row (vec (repeat cols 0)))
(def empty-board (vec (repeat rows empty-row)))


(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)
)
