(ns core
  (:require
   [reagent.core :as r]
   [reagent.dom :as rdom]))

(defn component []
  (r/with-let [counter (r/atom 0)]
    [:div#root
     [:h1 "Hello World"]
     [:button {:on-click #(swap! counter inc)}
      @counter]]))

(defn mount! []
  (js/console.log "Mounting...")
  (rdom/render [component]
               (js/document.getElementById "app")))

(defn init []
  (js/console.log "Starting...")
  (mount!))

(comment
  (init))
