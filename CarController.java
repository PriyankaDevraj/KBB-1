package kbb.project;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/AngularProject")
@CrossOrigin("*")
public class CarController {
	
	@Autowired
	CarRepository carRepository;
	
	@RequestMapping("/cars")
	public List<Car> getCars() {
		List<Car> cars = carRepository.findAll();
		return cars;
	}
	
	@RequestMapping("/cars/{id}")
	public Car getCar(@PathVariable String id) {
		return carRepository.findById(id).get();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/cars")
	public void addCar(@RequestBody Car car) {
		
		System.out.println(car.getId()+car.getName()+car.getType());
		carRepository.save(car);
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/cars/{id}")
	public void updateCar(@RequestBody Car car,@PathVariable String id) {
		System.out.println(car);
		Car newCar = carRepository.findById(id).get();
		newCar.setName(car.getName());
		newCar.setType(car.getType());
		carRepository.save(newCar);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.DELETE, value="/cars/{id}")
	public void deleteCar(@PathVariable String id) {
		carRepository.deleteById(id);
	}

	
}
