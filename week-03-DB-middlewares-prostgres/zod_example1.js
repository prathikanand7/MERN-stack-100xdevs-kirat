const zod = require("zod");

//if this is an array of number with atleast 1 input, return true, else return false
function validateInput(obj) {
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email: "hkirat@gmail.com",
    password: "asdaeasdad"
});

app.post("/login", function (req, res) {
    const response = validateInput(req.body)
    if (!response.success) {
        res.json({
            msg: "your inputs are invalid"
        })
        return;
    }
    //if success, return success message
})