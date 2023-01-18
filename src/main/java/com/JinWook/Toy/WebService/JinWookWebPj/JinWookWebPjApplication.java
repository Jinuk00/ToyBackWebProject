package com.JinWook.Toy.WebService.JinWookWebPj;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class JinWookWebPjApplication {

	public static void main(String[] args) {
		SpringApplication.run(JinWookWebPjApplication.class, args);
	}
}
