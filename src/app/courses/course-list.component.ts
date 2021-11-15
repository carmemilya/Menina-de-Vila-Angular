import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component ({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1 ,
                name: 'Como cuidar da Grana: parte I',
                imageUrl: '/assets/images/economia_1.jpg',
                price: 0.0,
                code: 'XPS-8796',
                duration: 120,
                rating: 4.5 ,
                realeseDate: 'November, 8, 2021'
            },
            {
                id: 2 ,
                name: 'Como cuidar da Grana: parte II',
                imageUrl: '/assets/images/economia_2.jpg',
                price: 0.0,
                code: 'LKL-1094',
                duration: 80,
                rating: 4,
                realeseDate: 'November, 9, 2021'
            }
        ]
    }

}