(ns ^:figwheel-always gametime.core-test
    (:require
      [cljs.test :refer-macros [deftest testing is]]
      [gametime.test-formatter :as formatter]
      [figwheel.client :as fw]
      [gametime.test-helpers :as th]
      [gametime.core :as gt]))

(enable-console-print!)

(deftest test-rows
  (is (= 50 gt/rows)))

(deftest test-cols
  (is (= 50 gt/cols)))

(deftest test-move-right
  (is (= [10 0] ((get gt/movement :right) [0 0 ]))))

(deftest test-move-left
  (is (= [-10 0] ((get gt/movement :left) [0 0 ]))))

(deftest test-move-up
  (is (= [0 10] ((get gt/movement :up) [0 0 ]))))

(deftest test-move-down
  (is (= [0 -10] ((get gt/movement :down) [0 0 ]))))

(deftest test-initial-pos
  (is (= [0 0] (get @gt/initial-state :pos))))

(deftest test-initial-points
  (is (= 0 (get @gt/initial-state :points))))

(deftest test-new-pos
  ( is (= [10 0] (gt/new-pos @gt/initial-state))))

(deftest test-update-state 
 (is (= [10 0] (get (gt/update-state @gt/initial-state) :pos))))

(deftest test-swap
  (swap! gt/initial-state gt/update-state )
  (is (= [10 0] (get @gt/initial-state :pos) )))

(deftest test-pix-in-inc
  (is (= 10 gt/px-inc)))

(deftest test-rand-food
  (is (= (type []) (type (gt/rand-food))))
)

(deftest test-inside
  (is (= true (gt/inside? gt/initial-state))
))


(defn run-tests []
      (cljs.test/run-all-tests #"gametime.*-test"))
(run-tests)

;; FW connection is optional in order to simply run tests,
;; but is needed to connect to the FW repl and to allow
;; auto-reloading on file-save
(fw/start {
           :websocket-url "ws://localhost:3449/figwheel-ws"
           :build-id "test"
           })

