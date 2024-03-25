(ns timezone-picker
  (:require ["react-timezone-select$default" :as TimezoneSelect]))

(defn component [zone]
  [:> TimezoneSelect {:value @zone
                      :on-change #(reset! zone (.-value %))}])
