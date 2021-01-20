---
title: Contact
sections:
  - section_id: contact
    type: section_contact
    background: gray
    title: 'Napište nám, s čím vám můžeme pomoci'
    content: >-
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a metus
      quis lorem malesuada luctus. Cras lacinia, eros at dapibus molestie, risus
      tortor pretium ligula.
    form_id: contactForm
    form_fields:
      - input_type: text
        name: name
        label: Jméno a příjmení
        is_required: true
      - input_type: email
        name: email
        label: Email
        is_required: true
      - input_type: select
        name: subject
        label: Co vás zajímá
        default_value: Vyberte oblast zájmu
        options:
          - Interaktivní dokumenty
          - Chatbot
          - Dynamická komunikace
      - input_type: textarea
        name: Zpráva
        label: Message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Send Message
template: landing
---
