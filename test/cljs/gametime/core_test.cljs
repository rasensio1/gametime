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

(deftest test-initial-history
  (is (= [] (get @gt/initial-state :history))))

(deftest test-new-pos
  ( is (= [10 0] (gt/new-pos @gt/initial-state))))

(deftest test-update-pos 
 (is (= [10 0] (get (gt/update-pos @gt/initial-state) :pos))))

(deftest test-pix-in-inc
  (is (= 10 gt/px-inc)))

(deftest test-rand-food
  (is (= (type []) (type (gt/rand-food))))
)

(deftest test-inside
  (is (= true (gt/inside? gt/initial-state))
))

;;(defonce app-state (atom {:pos [0 0] :dir :right :food [0 0] :points 0}))
;;(deftest test-update-on-food
;;  (gt/update-on-food)
;;  (is (= 1 (get @app-state :points)))
;;  )

(deftest test-new-history
  (is (= [[0 0]] (gt/new-history gt/initial-state)))
)

(deftest test-my-tail-empty
  (is (= [] (gt/my-tail gt/initial-state)))
)

(def tail-state gt/initial-state)
(deftest test-my-tail-populated
  (gt/pos-history tail-state)
  (swap! tail-state update-in [:points] inc)
  (is (= [[0 0]] (gt/my-tail tail-state)))
)

(def tail-state-2 gt/initial-state)
(deftest test-not-over-tail
  (gt/pos-history tail-state-2)
  (is (= [[0 0]] (gt/my-tail tail-state-2)))
  (is (= [0 0] (get @tail-state-2 :pos)))
  (is (= false (gt/not-over-tail? tail-state-2)))
  )


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

