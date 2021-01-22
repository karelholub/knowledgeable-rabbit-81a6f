---
title: Contact
sections:
  - section_id: contact
    type: section_contact
    background: gray
    title: 'Napište nám, s čím vám můžeme pomoci'
    content: >
      Svěřte nám svůj email a my se ozveme, abychom vám mohli poskytnout maximum
      informací o tématech, která vás zajímají.
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
        name: Chcete nám něco říct?
        label: Message
      - input_type: checkbox
        name: consent
        label: Souhlasím s možností kontaktování na základě dotazu
        is_required: true
    submit_label: Odeslat
template: landing
---
