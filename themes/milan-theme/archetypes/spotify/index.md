---
# Essential settings
title: "{{ replace .Name "-" " " | title }}"
subtitle: "{{ replace .Name "-" " " | title }}"
slug:
type: "post"
date: {{ .Date }}
translationKey: "{{ replace .Name "-" " " | title }}"

# Scheduling
draft: true

# Organization
layout:
topics: ["music"]
tags: []

# Style
style: "spotify"
size: "sm"
color: "#1ED760"
textColor: "#1ED760"
weight: ""

# Custom Classes
headerClass: ""
titleClass: ""
summaryClass: ""
footerClass: ""

# The Spotify link
summary: ""
---