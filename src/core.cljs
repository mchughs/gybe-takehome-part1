(ns core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]
   [time-picker :as time-picker]
   [timezone-picker :as timezone-picker]
   ["dayjs" :as dayjs]
   ["dayjs/plugin/utc" :as utc]
   ["dayjs/plugin/timezone" :as timezone]))

(dayjs/extend utc)
(dayjs/extend timezone)

(defn component []
  (r/with-let [time (r/atom (-> (dayjs) (.set "hour" 12) (.set "minute" 34)))
               ;; Grab the user's timezone as a default
               input-zone (r/atom (.-timeZone (.resolvedOptions (js/Intl.DateTimeFormat))))
               output-zone (r/atom "Etc/GMT")]
    [:div#root
     [:h1 "Timezone Converter"]
     [time-picker/component time]
     [timezone-picker/component input-zone]
     [timezone-picker/component output-zone]
     [:div (str "The time in " @output-zone " is..." 
                ;; See https://day.js.org/docs/en/timezone/converting-to-zone
                (-> @time
                    (.tz @input-zone true)
                    (.tz @output-zone)
                    (.format "LT")))]]))

(defn mount! []
  (js/console.log "Mounting...")
  (rdom/render [component]
               (js/document.getElementById "app")))

(defn init []
  (js/console.log "Starting...")
  (mount!))

(comment
  (init))
