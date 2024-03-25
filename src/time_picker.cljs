(ns time-picker
  (:require ["@mui/x-date-pickers/AdapterDayjs" :refer (AdapterDayjs)]
            ["@mui/x-date-pickers/LocalizationProvider" :refer (LocalizationProvider)]
            ["@mui/x-date-pickers/TimePicker" :refer (TimePicker)]))

(defn component [time]
  [:> LocalizationProvider {:dateAdapter AdapterDayjs}
   [:> TimePicker {:label "Input Time"
                   :value @time
                   :on-change #(reset! time %)}]])
