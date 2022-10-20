from django.db import models

# Create your models here.
class CodingProjects(models.Model):
    title = models.CharField(max_length=300)
    description = models.CharField(max_length=700)
    image = models.ImageField(upload_to='coding_images/')

    def  __str__(self):
        return self.title

class CodingImages(models.Model):
    project = models.ForeignKey(CodingProjects, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='coding_images/')

    def __str__(self):
        return self.project.title


class ArchProjects(models.Model):
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=300)
    place = models.CharField(max_length=100)
    image = models.ImageField(upload_to='arch_images/')

    def __str__(self):
        return self.title

class ArchImages(models.Model):
    project = models.ForeignKey(ArchProjects, default=None, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='arch_images/')
    text = models.TextField(null=True)

    def __str__(self):
        return self.project.title + ' Image'


class Owner(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    email = models.EmailField()
    aboutMeText = models.TextField()
    image = models.ImageField(upload_to='my_image/')

    def __str__(self):
        return '%s %s' % (self.first_name, self.last_name)


class TechSkills(models.Model):
    person = models.ForeignKey(Owner,on_delete=models.SET_NULL, blank=True,null=True)
    techSkill = models.CharField(max_length=50)
    techSkillRange = models.IntegerField()

    def __str__(self):
        return self.techSkill
