const Author = require('../models/author.model');

module.exports = {
    
    createNewAuthor: (req, res) => {
        const { firstName, lastName, bookTitle } = req.body;
        Author.create({
            firstName: firstName,
            lastName: lastName,
            bookTitle: bookTitle
        })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err))
    },

    findAllAuthors: (req, res) => {
        console.log("All Authors");
        Author.find({})
            .then((allAuthors) => {
            res.json(allAuthors);
            })
            .catch(err => {
                console.log("Get all products failed");
                res.status(400).json(err);
            })
    },

    findOneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then((oneAuthor) => {
                console.log(oneAuthor);
                res.json(oneAuthor);
            })
            .catch(err => {
                console.log("Sorry unable to find that author");
                res.status(400).json(err);
            })
    },

    updateAuthor: (req, res) => {
        Author.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            {new: true, runValidators: true}
        )
            .then((updateAuthor) => { res.json(updateAuthor) })
            .catch(err => {
                console.log("Faild to update that author");
                res.status(400).json(err);
            })
    },

    deleteAuthor: (req, res) => {
        Author.deleteOne( {_id: req.params.id } )
            .then((deletedAuthor) => res.json({deleted: deletedAuthor}))
            .catch(err => {
                console.log("Faild to delete that author");
                res.status(400).json({ message: "Something went wrong in delete", error: err });
            })
    },
}

