# Dashboard

## Author Information

This project was created by [Katherine Adjahoe](http://katherineadjahoe.com) for an interview test.

## **What this Dashboard App does?**

This is an Angular dashboard project that displays student data based on attendance percentage and/or by guidance counselor for XYZ school.

It gives the user the option to choose what is considered chronically absent.

- Search by guidance counselor or by attendance percentage. The data is listed by grade.

- There are two views:

1. Princial: Overall students per grade

2. Guidance counselor: Overall students per grade specifically for the counselor selected.

- Using the threshold:
  The data will adjust accordingly to populate only the students that has an attendance percentage less than or equal to the number choosing as the threshold per grade overall or by counselor.

## **Frontend Framework**

### Angular [Angular CLI](https://github.com/angular/angular-cli) version 8.2.1.

    This framework was used because it
    has the ability to render information
    dynamically and read json files with
    the resolveJsonModule and communicating
    with API's using HTTPModule for
    data manipulation.

    The ability to separate concerns is
    the main reason Angular was choosen.
    Each component that makes up the user's
    view can be managed in its only
    environment and still operate under
    the parent umbrella.

    Data can be aggregated in a seperate
    place and service components as needed.

    It is very powerful in many ways.
    This is a CSR(Client Side Rendering)
    framework but it has the ability to
    do SSR(Server Side Rendering) if needed,
    which is good for SEO.

    In this use-case SEO is not important
    because the User Interface is
    considered private and not
    accesible to the public.
    The data is only for specific
    users to see and interact with.

## **CSS Framework**

### Bulma verion 0.7.5 [bulma.io](https://bulma.io)

    Bulma was used because it is
    lighter than the Bootstrap framework.

    Bulma does not come with javascript functionalities.
    If javascript is needed for certain
    behaviors it would have to be created separately.

    This was good because Angular can
    behave a little tricky with javascript
    files that need to run on the
    page while displaying content dynamically.

    To avoid those situations Bulma
    worked right out of the box.

# Overview of things used in this project

## _Debounce Functionality:_ from RXJS library

    The debounce function delays the
    processing of the keyup event until
    the user has stopped typing for a predetermined amount of time. This
    prevented the (slider that is used
    to set the threshold for chronically
    absent) from needing to process every
    event and also drastically reduces
    the number of calls sent to your server.

## _Observable Subject:_ from RXJS library

    When observable.subscribe is called,
    the Observer gets attached to the
    newly created Observable execution.
    This is used on the slider that sets
    the threshold for the attendace
    percentage filter.

## _Two Way Binding in Angular:_ ngModel

    To create two-way data bindings
    for reading and writing input-control
    values. This was used on the
    slider to send and receive values.

## _Interpolation:_ {{myHero}}

    To display a component property.
    All the data displayed from
    aggregation is displayed
    with interpolation.

## _Array Property Displaying:_ ngFor

    To display each item in a list.

## _Condition Displaying:_ ngIf

    To display a view or a portion
    of a view only under
    specific circumstances.

#

## **How to run project?**

• Open the project in a text editor.

• Navigate into the project from your terminal

• Run `ng serve` for a dev server.

• Navigate to `http://localhost:4200/`.

### The Github repository: (https://github.com/kadjahoe/Dashboard)
