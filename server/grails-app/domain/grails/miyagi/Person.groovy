package grails.miyagi

class Person {

    static constraints = {
        name blank: false, unique: true
        birthDate blank: false
        address blank:false size 10..255
    }

    String name
    Date birthDate
    String address
}
