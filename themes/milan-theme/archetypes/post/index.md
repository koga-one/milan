---
# Essential settings
title: "{{ replace .Name "-" " " | title }}"
type: "post"
date: {{ .Date }}
translationKey: "{{ replace .Name "-" " " | title }}"

# Scheduling
draft: true

# Organization
layout:
topics: [""]
tags: []

# Style
style: "normal"
size: "md"
color: ""
textColor: ""
protected: false
weight: ""

# Custom Classes
headerClass: ""
titleClass: ""
summaryClass: ""
footerClass: ""

# Thumbnail / Featured
summary: ""
thumb: "images/Placeholder.jpg"
alt: "Esse é o placeholder"
---