#[macro_use] extern crate rocket;

use rocket::serde::{json::Json, Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct Task {
    id: usize,
    description: String,
}

#[get("/tasks")]
fn get_tasks() -> Json<Vec<Task>> {
    Json(vec![
        Task { id: 1, description: "Learn Rust".to_string() },
        Task { id: 2, description: "Build a REST API".to_string() },
    ])
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![get_tasks])
}
