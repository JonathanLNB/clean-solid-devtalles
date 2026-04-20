interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void
}

class Tucan implements Bird, FlyingBird {
    public fly() {

    }

    public eat() {

    }
}

class Humminbird implements Bird, FlyingBird {
    public fly() {
    }

    public eat() {

    }
}


class Ostrich implements Bird, RunningBird {
    eat(): void {
    }

    run(): void {
    }

}

class Penguin implements Bird, SwimmerBird {
    eat(): void {
    }

    swim(): void {
    }
}
