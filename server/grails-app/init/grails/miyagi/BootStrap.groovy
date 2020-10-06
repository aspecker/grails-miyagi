package grails.miyagi
import java.time.LocalDate
class BootStrap {

    def init = { servletContext ->
        new Person(name: "Ben Wyatt", birthDate: LocalDate.now(), address: "123 Fake St").save()
        new Person(name: "Thomas Jefferson", birthDate: LocalDate.now(), address: "123 Fake St").save()
        new Person(name: "Alex Trebek", birthDate: LocalDate.now(), address: "123 Fake St").save();
    }
    def destroy = {
    }
}
