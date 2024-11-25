export const getUsers = (userService) => async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        console.log('userController: ', users)
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const addUser = (userService) => async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log(username, password)
        if(!username || !password) {
            return res.status(400).json({error : '유효하지 않은 유저 정보입니다.'})
        }
        const user = await userService.registerUser({username, password})
        res.status(201).json(user);
    } catch(error) {
        res.status(500).json({error : error.message})
    }  
}

export const getUser = (userService) => async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const user = await userService.getUserById(id);
      console.log(user)
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };