const catchAsync = (fn) =>
    (req, res, next) => {
        Promise.resolve(fn(req, res, next))
            .catch((err) => next(err));
    };

module.exports = catchAsync;


// //for eg if i create a middleware like this

// module.exports = {
//     asyncErrorHandler: (fn) =>
//         (req, res, next) => {
//             Promise.resolve(fn(req,res,next))
//                 .catch(next);
//         }
//     }
// //and use it in my routes eg:

// router.get('/:id', asyncErrorHandler(postShow));
// where postShow is in controller here

// async postShow(req, res, next){
//     let post = await Post.findById(req.params.id);
//     res.render('posts/show', {post})
//     },
//     //if you dont use the asyncErrorHandler, you would have to call next in every single catched error, that makes your code really verbose and repetitive:

//     // THIS IS NOT HOW TO MANAGE ERROR CORRECTLY

//     router.get('/:id', async postShow(req, res, next){
//       try {
//         let post = await Post.findById(req.params.id);
//         res.render('posts/show', {post})
//       } catch (error) {
//         next(error) // k
//       }
//     }),