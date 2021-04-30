---
# Essential settings
title: "{{ replace .Name "-" " " | title }}"
type: "banner"
date: {{ .Date }}
translationKey: "{{ replace .Name "-" " " | title }}"

# Scheduling
draft: false

# Organization
layout:
topics: [""]
tags: []

# Style
style: "imagetext"
size: "xl"
color: ""
textColor: "#fff"
weight: "1"

# Custom Classes
headerClass: "gone"
titleClass: "pt-3 display-1"
summaryClass: ""
footerClass: "gone"

# Thumbnail / Featured
summary: ""
thumb: ""
alt: ""
---