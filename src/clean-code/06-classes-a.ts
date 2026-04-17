(() => {
    // Sin aplicar principio de responsabilidad única
    type Gender = 'M' | 'F'

    // Opción 1
    class Person {

        constructor(public name: string,
                    public gender: Gender,
                    public birthdate: Date) {
        }
    }

    /* Opción 2
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }
    */

    class User extends Person {
        public lastAccess: Date;

        constructor(public email: string, public role: string, name: string, gender: Gender, birthdate: Date) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials(): boolean {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(public workingDirectory: string,
                    public lastOpenFolder: string,
                    email: string,
                    role: string,
                    name: string,
                    gender: Gender,
                    birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'jonathanleonardonb@gmail.com',
        'Admin',
        'Jonathan',
        'M',
        new Date('1997-05-30')
    )

    console.log({userSettings});
})();
