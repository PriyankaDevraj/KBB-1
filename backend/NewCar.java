package kbb.project;

import org.springframework.data.annotation.Id;

public class NewCar {
	@Id
    int id;
    String make;
    String model;
    String type;
    int year_made;
    int mileage;
    int price;
	String car_status;
	
	
    public NewCar(int id, String make, String model, String type, int year_made, int mileage, int price,
			String car_status) {
		super();
		this.id = id;
		this.make = make;
		this.model = model;
		this.type = type;
		this.year_made = year_made;
		this.mileage = mileage;
		this.price = price;
		this.car_status = car_status;
	}
    
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMake() {
		return make;
	}
	public void setMake(String make) {
		this.make = make;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getYear_made() {
		return year_made;
	}
	public void setYear_made(int year_made) {
		this.year_made = year_made;
	}
	public int getMileage() {
		return mileage;
	}
	public void setMileage(int mileage) {
		this.mileage = mileage;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
	public String getCar_status() {
		return car_status;
	}
	public void setCar_status(String car_status) {
		this.car_status = car_status;
	}
}
