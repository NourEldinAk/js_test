
maze_blocks= [
    ["#","#","#","#","#"],
    ["s",".",".",".","#"],
    ["#",".","#",".","#"],
    ["#","#",".",".","#"],
    ["#","#","x","#","#"]
]
next_block = maze_blocks[1][0]
counter = 0
class Maze{
    constructor(){
        let mouse = new Mouse()
        Mouse.prototype.welcome = function(){
            console.log("Welcome to the mouse escaping game")
        }
        mouse.__proto__.welcome()
        mouse.__proto__.create_mouse()
        mouse.__proto__.try_to_escape()

    }
}

class Mouse{
    constructor(x_dims,y_dims){
        for(let i = 0 ; i<x_dims;i++){
            for(let j=0;j<y_dims;j++)
            if(maze_blocks[i][j]==="s"){
                this.mouse_position= maze_blocks[i][j]

            }
        }
    }
    try_to_escape(){
    console.log("Trying to escape")
    let not_the_end = true
    while(not_the_end){
        this.check_for_wall()

        if(this.endpoint_reached()){
            console.log("congrats you won!")
            not_the_end= false
        }
        counter++;
    }
}

create_mouse(){
    console.log("Creating mouse...")
}
rotate_left(){
    console.log("turning left...")
    }
rotate_right(){
    console.log("turning right...")  
    }
move_forward(){
    console.log("moving forward...")
}
check_for_wall(){
    if (next_block == "#"){
        this.rotate_right()
        if(next_block =="#"){
            this.rotate_left()
            this.rotate_left()
        }else{
            this.rotate_left()
        }  
    }else{
        this.move_forward()
    }
    this.move_forward()

}
endpoint_reached(){
    if (this.mouse_position == "x" || counter >4){
        console.log("End point reached.")
        return true
    }else{
        return false
    }
}
}

let maze = new Maze()
