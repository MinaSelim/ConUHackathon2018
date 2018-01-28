package server.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import elders.Elder;
import server.service.ElderService;

@RestController
public class ApplicationController 
{
	@Autowired
	private ElderService services;
	
	@RequestMapping("/elders")
	public List<Elder> home()
	{
		return services.getElders();
	}

}
