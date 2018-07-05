package com.valaxing.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.valaxing.controller.ValaxingController;

@SpringBootApplication
@ComponentScan(basePackageClasses = ValaxingController.class)
public class DemoApplication {
	
	//ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
