const model = require('../model/user');

const User = model.User;
function sorted(a, b) {
    return a.id - b.id
}
exports.getUser = async (req, res) => {
    try {
        const products = await User.find(); // execute find() method on User model
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
    }
}
exports.singleUser = async (req, res) => {
    // console.log(req.params.id)
    try {
        const product = await User.findOne({ id: { $eq: +req.params.id } })
        res.json(product)
    } catch (error) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
    }
}
exports.addUser = async (req, res) => {
    const user = await new User(req.body)

    try {
        const doc = await user.save()
        console.log(doc);
        res.status(201).json(doc);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred' });
    }
}

exports.putUser = async (req, res) => {
    try {
        // findOneAndReplace is the put method of database
        const doc = await User.findOneAndReplace({ _id: req.params.id }, req.body, { new: true });
        res.status(201).json(doc)
    } catch (err) {
        console.log(err)
        res.status(201).json(err)
    }
}
exports.patchUser = async (req, res) => {
    try {
        const doc = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(201).json(doc)
    } catch (err) {
        res.status(401).json(err)
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const doc = await User.deleteOne({ _id: req.params.id });
        res.status(201).json(doc)
    } catch (err) {
        res.status(401).json(err)
    }
}

