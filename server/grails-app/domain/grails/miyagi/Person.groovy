package grails.miyagi

class Person {

    String name
    Date birthDate
    String address

    static constraints = {
      firstName()
      birthDate()
      address()
    }
}
