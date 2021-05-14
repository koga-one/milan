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
style: "whisper"
size: "sm"
color: "#FF5277"
textColor: "#FF5277"
weight: ""

# Custom Classes
headerClass: ""
titleClass: ""
summaryClass: ""
footerClass: ""

#<div class="row d-flex" data-masonry='{"percentPosition": true }'>
#    <div class="col-1"></div>
#    {{< imgproc path="images/snow.jpg" method="Fill" size="1920x1080" col="8" >}}
#</div>

#<div class="row d-flex justify-content-center">
#    {{< imgproc path="images/snow.jpg" method="Fill" size="1920x1080" col="8" >}}
#</div>
---

***#000***

<div class="row d-flex justify-content-center">
    {{< imgproc path="images/Placeholder.jpg" method="Fill" size="400x500" col="12" >}}
</div>