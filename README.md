# Mirror

*A space to grow through reflection*

[![Mirror App Demp](https://raw.githubusercontent.com/markwk/mindset_journaling_app/master/slides/app-demo.png)](https://docs.google.com/presentation/d/1eoFVeNfXtpXi-BsYfnEdRUone6Ws2rX5vmOkkSfTMxM/edit?usp=sharing)

----

This is the public repo for code created during AI LA / MIT Hacking Medicine Hackathon on Mental Health and Cancer from Nov 1 to 3, 2019 at Cedar-Sinai Accelerator in Los Angeles. 

[Check out our pitch deck!](https://docs.google.com/presentation/d/1eoFVeNfXtpXi-BsYfnEdRUone6Ws2rX5vmOkkSfTMxM/edit?usp=sharing) 

### What is Mirror? 

Our mission: help people be more resilient. 

The growth mindset is a well-known metric with both diagnostic and predict value on mental, physical and social well-being. People with a fixed mindset are less adaptable to dealing with stress and change and thus get sick more and struggle more often personally and professionally. By contrast, people who classify and self-identify with a growth mindset are more productive and physically and mentally healthier.  

At Mirror, we encourage, track and help people to build mental skills, better habits, resilience, and flourishing through journaling. 

Our KPI is all about developing the growth mindset in ourselves and in our communities. 

### What Mirror Does? 

Mirror is a smart journaling tool that provides: 

- Painless user experience using voice-to-text
- Personalized Journaling reflection prompts based on evidence-backed proven journaling research. 
- Intelligent insights about your mental health through journaling. 
- Set goals and track progress toward practicing a **growth mindset** by understanding self and self narrative. 

### From Assesment to Personalized Journaling 

![](https://raw.githubusercontent.com/markwk/mindset_journaling_app/master/slides/app-user-journey.png)

Our product vision starts with a lightly modified version of the growth mindset questionnaire, the gold standard for identifying and classifying which mindset one fits into. After that, we let users use open input journaling of their choicing or to following guided journaling protocols that are automatically tracked and scored. Over time you get not only a journal for mental health but a tool for self-reflection and personal memories over time.  

### What We Built 

During the weekend, we created: 

- a react native app that provides 
- voice-to-text input and then uses 
- Natural Language Processing (NLP) from IBM Watson and Google's BERT to 
- extract sentiment and emotion and 
- calculate "Growth Mindset" Asssesment

### Competitive Landscape

![](https://raw.githubusercontent.com/markwk/mindset_journaling_app/master/slides/competitve-landscape.png)

Compared to both therapy-focused technologies and journaling apps, Mirror provides both a high impact and interactivity at a low cost. 

Based on initial market and customer research, we believe there is a significant opportunity for this kind of cognitive therapy through self-help technology. Initial target customers range from coaching, social workers, and therapists to enterprise corporate well-ness programs.    

While the mental health space is dominated by mindfulness and meditation apps, we believe there is an underserved need for evidence-based journaling tools. 

### Team: 

![Mirror Team P
hoto](https://raw.githubusercontent.com/markwk/mindset_journaling_app/master/slides/team.jpg)

Mark, Shami, Rodrigo, Raleigh, and Kjell

App Code by [Mark Koester](http://www.markwk.com/) at [github.com/markwk](https://github.com/markwk).  

### Use, Install, and Improve 

After downloading the code, run: 

- `yarn install`
- For Mac:`cd ios && pod install` (note: be sure to have Cocoapod installed)
- at repo root then run `react-native run-ios`