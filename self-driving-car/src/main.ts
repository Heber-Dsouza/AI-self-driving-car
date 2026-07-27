import { Car } from "./classes/Car";

const canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const car = new Car(100, 100, 30, 50);
car.draw(ctx);
