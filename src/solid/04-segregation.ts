interface Bird {
    fly(): void;

    eat(): void;

    run(): void;

    swim(): void

}

class Tucan implements Bird {
    public fly() {

    }

    public eat() {

    }

    run(): void {
    }
}

class Humminbird implements Bird {
    public fly() {
    }

    public eat() {

    }

    public run() {
    }
}


class Ostrich implements Bird {
    eat(): void {
    }

    fly(): void {
        throw new Error('Esta ave no vuela');
    }

    run(): void {
    }

}

class Penguin implements Bird {
    eat(): void {
    }

    fly(): void {
        throw new Error('Esta ave no vuela');
    }

    run(): void {
    }

    swim(): void {
    }
}
