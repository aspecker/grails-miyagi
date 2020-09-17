package grails.miyagi


import grails.rest.*
import grails.converters.*

class PersonController {
	static responseFormats = ['json', 'xml']
	
    def index() {

    }

    def save() {
      def p = new Person(name: "Fred", dob: "12/31/1990", address: "123 Fake St")
      p.save()
    }

}
