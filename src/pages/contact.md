---
title: Kontakt
hide_title: false
sections:
  - type: section_contact
    background: gray
    title: Komunikujte lépe - s námi
    content: >-
      ***

      Klientská komunikace je naše vášeň a rádi poznáváme nové případy a možnosti využití. Pojďme se sejít nad vašimi požadavky a potřebami a společně najít efektivní řešení.<br>
      Pošlete nám [email](mailto:karel.holub@copygeneral.cz), nebo vyplňte údaje v kontaktním formuláři a my se vám ozveme.<br> 

      ***
    form_id: contactForm
    form_action: /diky
    form_fields:
      - input_type: text
        name: name
        label: Jméno a příjmení
        is_required: true
      - input_type: email
        name: email
        label: Email
        is_required: true
      - input_type: tel
        name: phone
        label: Telefon  
      - input_type: select
        name: subject
        label: Co vás zajímá
        default_value: 
        options:
          - Dávková komunikace
          - On-demand komunikace
          - Interaktivní dokumenty
          - Dynamická komunikace
          - Chatbot
          - Komunikační mystery shopping
          - Automatizace komunikačních kampaní
          - Ostatní
      - input_type: textarea
        name: zprava 
        label: Chcete se na něco zeptat nebo si domluvit ukázku našich řešení? Napište nám.
        placeholder: test
    submit_label: Odeslat

  - type: section_content
    image: https://panorama-mapserver.mapy.cz/compose_pano?w=400&h=225&pid=69732382&fov=1.57&pitch=-0.066&yaw=1.240
    content: >-
      ***


      ### Kde nás najdete


      Křížová 2598/4<br>
      150 00<br> Praha 5<br>

      tel.: +420 210 219 000<br>
      (v pracovní dny od 8–17 hodin)<br>

      [Na mapě](https://mapy.cz/s/29a4c)

       ***
seo:
  type: stackbit_page_meta
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
template: landing
---
