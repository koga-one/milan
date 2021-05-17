---
# Essential settings
title: "{{ replace .Name "-" " " | title }}"
subtitle: "{{ replace .Name "-" " " | title }}"
type: "post"
date: {{ .Date }}
translationKey: "{{ replace .Name "-" " " | title }}"

# Scheduling
draft: true

# Organization
layout:
topics: ["journal"]
tags: []

# Style
style: "normal"
size: "md"
color: "#C8D45D"
textColor: "#C8D45D"
weight: ""

# Custom Classes
headerClass: ""
titleClass: ""
summaryClass: ""
footerClass: ""

# Thumbnail / Featured
summary: "***#000 - Week 0***"
#thumb: "images/Placeholder.jpg"
alt: "Esse é o placeholder"

#<div class="row d-flex" data-masonry='{"percentPosition": true }'>
#    <div class="col-1"></div>
#    {{< imgproc path="images/snow.jpg" method="Fill" size="1920x1080" col="8" >}}
#</div>

#<div class="row d-flex justify-content-center">
#    {{< imgproc path="images/snow.jpg" method="Fill" size="1920x1080" col="8" >}}
#</div>
---