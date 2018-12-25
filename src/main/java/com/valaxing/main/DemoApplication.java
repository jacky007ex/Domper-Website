package com.valaxing.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import com.koala.controller.MainViewController;

@SpringBootApplication
@ComponentScan(basePackageClasses = MainViewController.class)
public class DemoApplication {
	
	//ApplicationContext context = new ClassPathXmlApplicationContext("Beans.xml");
	
	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
