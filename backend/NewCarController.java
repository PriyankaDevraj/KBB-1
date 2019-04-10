package kbb.project;

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
public class NewCarController {
	
	@Autowired
	NewCarRepository newCarRepository;
	
	@RequestMapping("/")
	public List<NewCar> getCars() {
		List<NewCar> newCars = newCarRepository.findAll();
		return newCars;
	}
	
	@RequestMapping("/newcars/{id}")
	public NewCar getCar(@PathVariable int id) {
		return newCarRepository.findById(id).get();
	}
	
	@RequestMapping(method=RequestMethod.POST,value="/newcars")
	public void addCar(@RequestBody NewCar newCar) {
		
		newCarRepository.save(newCar);
		System.out.println("after save");
	}
	
	@RequestMapping(method=RequestMethod.PUT,value="/newcars/{id}")
	public void updateCar(@RequestBody NewCar newcar,@PathVariable int id) {
		System.out.println(newcar);
		NewCar newCar = newCarRepository.findById(id).get();
		newCar.setMake(newCar.getMake());
		newCar.setModel(newCar.getModel());
		newCar.setType(newCar.getModel());
		newCar.setYear_made(newCar.getYear_made());
		newCar.setMileage(newCar.getMileage());
		newCar.setPrice(newCar.getPrice());
		newCar.setCar_status(newCar.getCar_status());
		newCarRepository.save(newCar);
	}
	@CrossOrigin(origins = "http://localhost:4200")
	@RequestMapping(method=RequestMethod.DELETE, value="/newcars/{id}")
	public void deleteCar(@PathVariable int id) {
		newCarRepository.deleteById(id);
	}

	
}
