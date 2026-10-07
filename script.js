/* ==========================================
   RIDENOVA BOOKING SYSTEM
   FRONTEND / SIMULATED DATA ONLY
========================================== */


/* =========================
   ELEMENTS
========================= */

const pickupInput =
    document.getElementById("pickup");

const destinationInput =
    document.getElementById("destination");

const currentLocationBtn =
    document.getElementById("currentLocationBtn");

const bookRideBtn =
    document.getElementById("bookRideBtn");

const rideStatus =
    document.getElementById("rideStatus");

const statusTitle =
    document.getElementById("statusTitle");

const statusText =
    document.getElementById("statusText");

const riderCard =
    document.getElementById("riderCard");

const riderVehicle =
    document.getElementById("riderVehicle");

const vehicleMarker =
    document.getElementById("vehicleMarker");

const cancelRideBtn =
    document.getElementById("cancelRideBtn");

const rideBookedModal =
    document.getElementById("rideBookedModal");

const continueRideBtn =
    document.getElementById("continueRideBtn");

const cancelReasonModal =
    document.getElementById("cancelReasonModal");

const keepRideBtn =
    document.getElementById("keepRideBtn");

const confirmCancelBtn =
    document.getElementById("confirmCancelBtn");

const rideCancelledModal =
    document.getElementById("rideCancelledModal");

const closeCancelledBtn =
    document.getElementById("closeCancelledBtn");

const zoomIn =
    document.getElementById("zoomIn");

const zoomOut =
    document.getElementById("zoomOut");

const map =
    document.querySelector(".map");

const farePrices =
    document.querySelectorAll(".fare-price");


/* =========================
   VARIABLES
========================= */

let selectedVehicle = "bike";

let currentVehicleIcon = "🏍️";

let mapScale = 1;


/* =========================
   HIDE FARES INITIALLY
========================= */

function hideFares() {

    farePrices.forEach(price => {

        price.classList.add("hidden-fare");

    });

}


/* =========================
   SHOW FARES
========================= */

function showFares() {

    farePrices.forEach(price => {

        price.classList.remove("hidden-fare");

    });

}


/* =========================
   CHECK LOCATIONS
========================= */

function checkLocations() {

    const pickup =
        pickupInput.value.trim();

    const destination =
        destinationInput.value.trim();


    if (
        pickup !== "" &&
        destination !== ""
    ) {

        showFares();

    } else {

        hideFares();

    }

}


/* =========================
   CURRENT LOCATION
========================= */

currentLocationBtn.addEventListener(
    "click",
    () => {

        /*
           IMPORTANT:
           This does NOT use GPS.
           This is only dummy text.
        */

        pickupInput.value =
            "Current Location";

        pickupInput.focus();

        checkLocations();

    }
);


/* =========================
   LOCATION INPUT EVENTS
========================= */

pickupInput.addEventListener(
    "input",
    checkLocations
);

destinationInput.addEventListener(
    "input",
    checkLocations
);


/* =========================
   VEHICLE SELECTION
========================= */

const vehicleCards =
    document.querySelectorAll(".vehicle-card");


vehicleCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            vehicleCards.forEach(item => {

                item.classList.remove("active");

            });


            card.classList.add("active");


            selectedVehicle =
                card.dataset.vehicle;


            if (
                selectedVehicle === "bike"
            ) {

                currentVehicleIcon =
                    "🏍️";

            }


            if (
                selectedVehicle === "auto"
            ) {

                currentVehicleIcon =
                    "🛺";

            }


            if (
                selectedVehicle === "cab"
            ) {

                currentVehicleIcon =
                    "🚕";

            }


            vehicleMarker.textContent =
                currentVehicleIcon;

        }
    );

});


/* =========================
   BOOK RIDE
========================= */

bookRideBtn.addEventListener(
    "click",
    () => {

        const pickup =
            pickupInput.value.trim();

        const destination =
            destinationInput.value.trim();


        /* CHECK PICKUP */

        if (pickup === "") {

            pickupInput.focus();

            pickupInput.style.color =
                "#d25555";

            setTimeout(
                () => {

                    pickupInput.style.color =
                        "#222222";

                },
                1000
            );

            return;

        }


        /* CHECK DESTINATION */

        if (destination === "") {

            destinationInput.focus();

            destinationInput.style.color =
                "#d25555";

            setTimeout(
                () => {

                    destinationInput.style.color =
                        "#222222";

                },
                1000
            );

            return;

        }


        /* DISABLE BUTTON */

        bookRideBtn.disabled =
            true;

        bookRideBtn.innerHTML =
            "Finding Rider...";


        /* HIDE OLD CARD */

        riderCard.classList.add(
            "hidden"
        );


        /* SHOW STATUS */

        rideStatus.classList.remove(
            "hidden"
        );


        statusTitle.textContent =
            "Finding Rider...";

        statusText.textContent =
            "Looking for nearby riders";


        /* VEHICLE START */

        vehicleMarker.style.left =
            "45%";

        vehicleMarker.style.top =
            "48%";


        /* STEP 1 */

        setTimeout(
            () => {

                statusTitle.textContent =
                    "Rider Found";

                statusText.textContent =
                    "Waiting for rider to accept";

            },
            1800
        );


        /* STEP 2 */

        setTimeout(
            () => {

                statusTitle.textContent =
                    "Rider Accepted";

                statusText.textContent =
                    "Your rider is on the way";


                vehicleMarker.style.left =
                    "34%";

                vehicleMarker.style.top =
                    "54%";

            },
            3300
        );


        /* STEP 3 */

        setTimeout(
            () => {

                rideStatus.classList.add(
                    "hidden"
                );


                updateRiderVehicle();


                /*
                   Show colorful popup
                   after rider accepts.
                */

                rideBookedModal.classList.remove(
                    "hidden"
                );


                bookRideBtn.innerHTML =
                    "Ride Booked ✓";

            },
            4700
        );

    }
);


/* =========================
   UPDATE RIDER VEHICLE
========================= */

function updateRiderVehicle() {

    if (
        selectedVehicle === "bike"
    ) {

        riderVehicle.textContent =
            "Bike";

    }

    else if (
        selectedVehicle === "auto"
    ) {

        riderVehicle.textContent =
            "Auto";

    }

    else if (
        selectedVehicle === "cab"
    ) {

        riderVehicle.textContent =
            "Cab";

    }

}


/* =========================
   VIEW RIDER DETAILS
========================= */

continueRideBtn.addEventListener(
    "click",
    () => {

        rideBookedModal.classList.add(
            "hidden"
        );

        riderCard.classList.remove(
            "hidden"
        );

    }
);


/* =========================
   CANCEL RIDE
========================= */

cancelRideBtn.addEventListener(
    "click",
    () => {

        cancelReasonModal.classList.remove(
            "hidden"
        );

    }
);


/* =========================
   KEEP RIDE
========================= */

keepRideBtn.addEventListener(
    "click",
    () => {

        cancelReasonModal.classList.add(
            "hidden"
        );

    }
);


/* =========================
   CONFIRM CANCELLATION
========================= */

confirmCancelBtn.addEventListener(
    "click",
    () => {

        const selectedReason =
            document.querySelector(
                'input[name="cancelReason"]:checked'
            );


        /*
           User must select a reason.
        */

        if (!selectedReason) {

            alert(
                "Please select a reason for cancelling the ride."
            );

            return;

        }


        /*
           Close reason popup
        */

        cancelReasonModal.classList.add(
            "hidden"
        );


        /*
           Hide rider
        */

        riderCard.classList.add(
            "hidden"
        );


        /*
           Reset booking button
        */

        bookRideBtn.disabled =
            false;

        bookRideBtn.innerHTML =
            'Book Ride <span>→</span>';


        /*
           Reset vehicle
        */

        vehicleMarker.style.left =
            "47%";

        vehicleMarker.style.top =
            "49%";


        /*
           Show cancelled popup
        */

        setTimeout(
            () => {

                rideCancelledModal.classList.remove(
                    "hidden"
                );

            },
            250
        );

    }
);


/* =========================
   CLOSE CANCELLED POPUP
========================= */

closeCancelledBtn.addEventListener(
    "click",
    () => {

        rideCancelledModal.classList.add(
            "hidden"
        );


        /*
           Clear selected reason
        */

        const selectedReason =
            document.querySelector(
                'input[name="cancelReason"]:checked'
            );


        if (selectedReason) {

            selectedReason.checked =
                false;

        }

    }
);


/* =========================
   ZOOM IN
========================= */

zoomIn.addEventListener(
    "click",
    () => {

        if (mapScale < 1.3) {

            mapScale += 0.1;

            map.style.transform =
                `scale(${mapScale})`;

        }

    }
);


/* =========================
   ZOOM OUT
========================= */

zoomOut.addEventListener(
    "click",
    () => {

        if (mapScale > 1) {

            mapScale -= 0.1;

            map.style.transform =
                `scale(${mapScale})`;

        }

    }
);


/* =========================
   ENTER KEY
========================= */

pickupInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            destinationInput.focus();

        }

    }
);


destinationInput.addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {

            bookRideBtn.click();

        }

    }
);


/* =========================
   INITIAL STATE
========================= */

hideFares();