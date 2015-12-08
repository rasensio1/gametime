(ns ^:figwheel-always gametime.core-test
    (:require
      [cljs.test :refer-macros [deftest testing is]]
      [gametime.test-formatter :as formatter]
      [figwheel.client :as fw]
      [gametime.test-helpers :as th]
      [gametime.core :as gt]))

(enable-console-print!)

(deftest test-is-true
    (is true))

(deftest test-go-right
    (is (= [1 0] (gt/go-right [0 0]))))

(deftest test-go-left
    (is (= [0 0] (gt/go-left [1 0]))))

(deftest test-go-up
    (is (= [0 1] (gt/go-up [0 0]))))

(deftest test-go-down
    (is (= [0 0] (gt/go-down [0 1]))))

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

