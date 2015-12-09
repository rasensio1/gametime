(ns ^:figwheel-always gametime.core-test
    (:require
      [cljs.test :refer-macros [deftest testing is]]
      [gametime.test-formatter :as formatter]
      [figwheel.client :as fw]
      [gametime.test-helpers :as th]
      [gametime.core :as gt]))

(enable-console-print!)

(deftest test-rows
  (is (= 20 gt/rows)))

(deftest test-cols
  (is (= 20 gt/cols)))

(deftest test-move-right
  (is (= [1 0] ((get gt/movement :right) [0 0 ]))))

(deftest test-move-left
  (is (= [-1 0] ((get gt/movement :left) [0 0 ]))))

(deftest test-move-up
  (is (= [0 1] ((get gt/movement :up) [0 0 ]))))

(deftest test-move-down
  (is (= [0 -1] ((get gt/movement :down) [0 0 ]))))

(def my-state (atom {:pos [0 0] :dir :right}))
;;(def my-state gt/initial-state)

(deftest test-initial-pos
  (is (= [0 0] (get @my-state :pos))))

(deftest test-new-pos
  ( is (= [1 0] (gt/new-pos {:pos [0 0] :dir :right} ))))


;;(def my-state gt/app-state)

;;(deftest test-new-pos
;;  (is (= [1 0] (gt/new-pos my-state)))
;;  )


(defn run-tests []
    (.clear js/console)
      (cljs.test/run-all-tests #"gametime.*-test"))
(run-tests)

;; FW connection is optional in order to simply run tests,
;; but is needed to connect to the FW repl and to allow
;; auto-reloading on file-save
(fw/start {
           :websocket-url "ws://localhost:3449/figwheel-ws"
           :build-id "test"
           })

