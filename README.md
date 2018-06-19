Bespin Web Frontend
------------

# Getting Started

In order to set up development for the web frontend, it is recommended to deploy a k8 cluster locally and use the scripts in [bespin-cluster](https://github.com/BespinMusic/bespin-cluster) to deploy a full environment.

# Deploying

To deploy a new version of the frontend, push the `web-fronted` docker image with a higher tag number. Hopefully we'll soon have scripts or a CD solution to automate the process.

For now, to get the new image into a production environment, update the tag number in https://github.com/BespinMusic/bespin-cluster/blob/master/cluster.tf and run `terraform apply`

# Roadmap

Currently in a working state:

* Main page with some buttons for testing
* Navbar with a login link
* Login (kinda)

Planned:

* Actual pages lol