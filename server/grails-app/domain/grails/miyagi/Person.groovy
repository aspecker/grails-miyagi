package grails.miyagi

class Person {

    String name
    Date birthDate
    String address

    static constraints = {
      name: maxSize 255
      address: maxSize 255
    }
}
