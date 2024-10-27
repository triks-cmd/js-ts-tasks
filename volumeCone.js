        function volumeOfCone(radius,height) {
            const pi = Math.PI;
            return (1 / 3) * pi * Math.pow(radius,2) * height;
        }

        let r = 5;
        let h = 10;
        console.log(volumeOfCone(r,h));