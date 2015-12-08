(ns ^:figwheel-always gametime.core-test
    (:require
      [cljs.test :refer-macros [deftest testing is]]
      [gametime.test-formatter :as formatter]
      [figwheel.client :as fw]
      [dommy.core :refer-macros [sel sel1]]
      [gametime.test-helpers :as th]
      [gametime.core :as c]))

(enable-console-print!)

(deftest test-is_true
    (is true))

(defn run-tests []
    (.clear js/console)
      (cljs.test/run-all-tests #"hickey48.*-test"))
(run-tests)

;; FW connection is optional in order to simply run tests,
;; but is needed to connect to the FW repl and to allow
;; auto-reloading on file-save
(fw/start {
           :websocket-url "ws://localhost:3449/figwheel-ws"
           :build-id "test"
           })

